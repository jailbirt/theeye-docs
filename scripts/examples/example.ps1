<#
Description: Prints first paramater to stdout
Execution from cmd: powershell.exe -NonInteractive -ExecutionPolicy ByPass -File "example.ps1 Hello World"
 #>
Write-Output $args[0]
Write-Output "Success"
