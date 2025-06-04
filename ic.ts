import { execSync } from 'node:child_process'
import { readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

// Function to recursively get all .svg files in a directory
function getSvgFiles(directory: string): string[] {
  const files: string[] = []

  const items = readdirSync(directory)

  for (const item of items) {
    const fullPath = join(directory, item)
    const stats = statSync(fullPath)

    if (stats.isDirectory()) {
      files.push(...getSvgFiles(fullPath))
    } else if (item.endsWith('.svg')) {
      files.push(fullPath)
    }
  }

  return files
}

// Function to transform filename by removing last two words and .svg extension
function transformFilename(filePath: string): string {
  const fileName = filePath.split('/').pop()?.split('\\').pop() ?? ''

  // Remove .svg extension first
  const nameWithoutExt = fileName.replace('.svg', '')

  // Split by underscores or hyphens to get words
  const separator = nameWithoutExt.includes('-') ? '-' : '_'
  const words = nameWithoutExt.split(separator)

  // Remove the last two words if there are at least 3 words
  if (words.length >= 3) {
    words.splice(-2)
  }

  // Join the remaining words
  return words.join(separator)
}

// Main function
async function main() {
  try {
    const iconsDir = join(process.cwd(), 'src', 'assets', 'icons', 'src')
    const svgFiles = getSvgFiles(iconsDir)

    console.log(`Found ${svgFiles.length} SVG files in the icons directory.`)

    for (const file of svgFiles) {
      const transformedName = transformFilename(file)
      console.log(`Processing ${file} -> ${transformedName}`)

      try {
        // Run the ic command with the transformed filename
        execSync(`ic ${transformedName}`, { stdio: 'inherit' })
      } catch (error) {
        console.error(`Failed to process ${file}:`, error)
      }
    }

    console.log('Processing completed.')
  } catch (error) {
    console.error('An error occurred:', error)
    process.exit(1)
  }
}

main()
