



[Visual Studio Code C# Beginner Tutorial: Hello World](https://www.youtube.com/watch?v=t4heVCEe3u8&list=PLL95dhg6IoDQDIHzHtgl1yDGHN2qNJ6th&index=8)  
https://dotnet.microsoft.com/download   
dotnet-sdk-3.1.404-win-x64.exe  
ndp48-devpack-enu.exe  

Установка выполнена.  

В "C:\Program Files\dotnet" установлены следующие компоненты.  
-  Пакет SDK для .NET Core 3.1.404
-  Среда выполнения .NET Core 3.1.10
-  Среда выполнения ASP.NET Core 3.1.10
-  Среда выполнения .NET Core для Windows Desktop 3.1.10

Этот продукт собирает данные об использовании.  
-  Дополнительные сведения и отказ: https://aka.ms/dotnet-cli-telemetry  

Ресурсы  
-  Документация по .NET Core: https://aka.ms/dotnet-docs
-  Документация по SDK: https://aka.ms/dotnet-sdk-docs
-  Заметки о выпуске: https://aka.ms/netcore3releasenotes
-  Учебники: https://aka.ms/dotnet-tutorials



dotnet new console  
dotnet restore  

```
```

## program.cs
```
using System;

namespace d2022hello
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
```

## launch.json
```
{
   // Use IntelliSense to find out which attributes exist for C# debugging
   // Use hover for the description of the existing attributes
   // For further information visit https://github.com/OmniSharp/omnisharp-vscode/blob/master/debugger-launchjson.md
   "version": "0.2.0",
   "configurations": [
        {
            "name": ".NET Core Launch (console)",
            "type": "coreclr",
            "request": "launch",
            "preLaunchTask": "build",
            // If you have changed target frameworks, make sure to update the program path.
            "program": "${workspaceFolder}/bin/Debug/netcoreapp3.1/d2022hello.dll",
            "args": [],
            "cwd": "${workspaceFolder}",
            // For more information about the 'console' field, see https://aka.ms/VSCode-CS-LaunchJson-Console
            "console": "internalConsole",
            "stopAtEntry": false
        },
        {
            "name": ".NET Core Attach",
            "type": "coreclr",
            "request": "attach",
            "processId": "${command:pickProcess}"
        }
    ]
}
```
## .vscode\tasks.json
```
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "build",
            "command": "dotnet",
            "type": "process",
            "args": [
                "build",
                "${workspaceFolder}/d2022hello.csproj",
                "/property:GenerateFullPaths=true",
                "/consoleloggerparameters:NoSummary"
            ],
            "problemMatcher": "$msCompile"
        },
        {
            "label": "publish",
            "command": "dotnet",
            "type": "process",
            "args": [
                "publish",
                "${workspaceFolder}/d2022hello.csproj",
                "/property:GenerateFullPaths=true",
                "/consoleloggerparameters:NoSummary"
            ],
            "problemMatcher": "$msCompile"
        },
        {
            "label": "watch",
            "command": "dotnet",
            "type": "process",
            "args": [
                "watch",
                "run",
                "${workspaceFolder}/d2022hello.csproj",
                "/property:GenerateFullPaths=true",
                "/consoleloggerparameters:NoSummary"
            ],
            "problemMatcher": "$msCompile"
        }
    ]
}
```
