$user = "codeAbinash"
$repo="tech-triangle"

(gh api repos/$user/$repo/actions/runs | ConvertFrom-Json).workflow_runs |
 %{ $_.id } |
 %{ gh api repos/$user/$repo/actions/runs/$_ -X DELETE }