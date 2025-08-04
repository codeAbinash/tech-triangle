import { exec } from 'child_process'
import { readdirSync } from 'fs'
import { join } from 'path'
import { promisify } from 'util'

const execAsync = promisify(exec)

// Converts 'Add01Icon' to 'add-01'
function toHugeiconsFormat(filename: string): string {
  // Remove 'Icon' suffix
  let name = filename.replace(/Icon$/, '')
  // Insert hyphens before uppercase letters (except first), then lowercase
  name = name.replace(/([a-z])([A-Z])/g, '$1-$2')
  // Insert hyphens before numbers
  name = name.replace(/([a-zA-Z])(\d+)/g, '$1-$2')
  // Insert hyphen before uppercase after number (e.g., 15Sec -> 15-Sec)
  name = name.replace(/(\d+)([A-Z][a-z]+)/g, '$1-$2')
  name = name.toLowerCase()
  return name
}

async function runIconCommand(iconName: string): Promise<{ success: boolean; iconName: string; error?: string }> {
  try {
    await execAsync(`ic ${iconName}`)
    console.log(`✅ Successfully processed: ${iconName}`)
    return { success: true, iconName }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error(`❌ Failed to process: ${iconName} - ${errorMessage}`)
    return { success: false, iconName, error: errorMessage }
  }
}

async function processIconsInBatches(iconNames: string[], batchSize = 20): Promise<string[]> {
  const failed: string[] = []

  for (let i = 0; i < iconNames.length; i += batchSize) {
    const batch = iconNames.slice(i, i + batchSize)
    console.log(`\nProcessing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(iconNames.length / batchSize)}`)

    const promises = batch.map((iconName) => runIconCommand(iconName))
    const results = await Promise.all(promises)

    results.forEach((result) => {
      if (!result.success) {
        failed.push(result.iconName)
      }
    })

    // Small delay between batches to avoid overwhelming the system
    if (i + batchSize < iconNames.length) {
      await new Promise((resolve) => setTimeout(resolve, 500))
    }
  }

  return failed
}

async function retryFailedIcons(failedIcons: string[], maxRetries = 2): Promise<void> {
  let currentFailed = failedIcons

  for (let retry = 1; retry <= maxRetries && currentFailed.length > 0; retry++) {
    console.log(`\n🔄 Retry attempt ${retry}/${maxRetries} for ${currentFailed.length} failed icons`)
    currentFailed = await processIconsInBatches(currentFailed, 3) // Smaller batch size for retries
  }

  if (currentFailed.length > 0) {
    console.log(`\n❌ Final failed icons after ${maxRetries} retries:`)
    currentFailed.forEach((icon) => console.log(`  - ${icon}`))
  } else {
    console.log(`\n🎉 All icons processed successfully after ${maxRetries} retries!`)
  }
}

async function main() {
  const iconsDir = join(process.cwd(), 'src', 'assets', 'icons', 'hugeicons')
  const files = readdirSync(iconsDir)

  const iconNames: string[] = []

  files.forEach((file) => {
    const match = file.match(/^(.+?)Icon\.(svg|tsx|js|ts)$/)
    if (match) {
      const iconName = toHugeiconsFormat(match[1] + 'Icon')
      iconNames.push(iconName)
    }
  })

  console.log(`Found ${iconNames.length} icons to process`)

  const failedIcons = await processIconsInBatches(iconNames)

  if (failedIcons.length > 0) {
    await retryFailedIcons(failedIcons)
  } else {
    console.log('\n🎉 All icons processed successfully!')
  }
}

main().catch(console.error)
