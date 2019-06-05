# Scripts Run As... and permissions

[![theeye.io](https://theeye.io/img/logo2.png)](https://theeye.io/en/index.html)

## Scripts runs by default in this way:

* on Linux: adding execution permission to the file and including the intepreter Hash in the first line.
* on Windows: setting the interpreter that should use the OS by the file extension.

Script RunAs allows to ejecute the script in a specific way, by using a different binary interpreter or in Linux using sudo. **Remember that** _**RunAs**_ **is part of the** _**Tasks'**_ **configuration, as** _**Tasks**_ **are responsible for Scripts' execution**. 

Please check the [Script Task Documentation](/core-concepts/scripts/) section for further details.

## Notation

The runas text could be any command line combination, using fixed variables, environment settings, command or anything that agent user\(by default theeye-a\) can do within the default shell \(usually bash or cmd\). We recommend to keep it simple and short. The only requirement is that the runas has to include the %script% KEYWORD. This KEYWORD indicates which part of the runas text will be replaced with the script path and its arguments.

## In Linux

### SUDO

To run the script using sudo, use one of the following runas syntax

1.

```bash
sudo -u user -c "%script%" # (remember to add the " or the arguments won't be visible by the script)
```

2.

```bash
sudo -u user $(%script%)
```

### Custom binaries

Some times is required to run the script with a binary which is not registered in the global or user paths.

One case is to run a Nodejs script with a different interpreter version. To achive that include the full path to the interpreter in the `runas`

```bash
/usr/local/lib/nodejs/v4/bin/node %script%
```

## In Windows

The same aproach to execute custom scripts with unregistered interpreters apply both to Windows and Linux.

You will have to provide the absolute path to script interpreter.

#### Powershell Scripts Execution

To execute a powershell script you must add this line to the "RunAs" tasks' field.

```text
powershell.exe -NonInteractive -ExecutionPolicy ByPass -File "%script%"
```

Use this line if you're using arguments in your script. Keep in mind that the filename of the ps1 script must not have white spaces.

```text
powershell.exe -NonInteractive -ExecutionPolicy ByPass -File %script%
```

#### Sudo note.

On Windows there are some alternatives to achieve the same result you can get using sudo. The native way is by using \[runas\]\([https://technet.microsoft.com/en-us/library/cc771525\(v=ws.10\).aspx](https://technet.microsoft.com/en-us/library/cc771525%28v=ws.10%29.aspx)\). The main important difference is that you should provide the user password at least once.

There are other alternative tools and configurations you will have to find out by yourself.

