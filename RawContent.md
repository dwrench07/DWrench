## Why was Node.js written in the C/C++ programming language?

C is a low-level language suited to systems programming--i.e. the construction of operating systems, database engines, and other code that must be highly efficient (in both time and space used to complete a given task). C is "close to the bare metal," compiling everything effectively into machine code and CPU instructions.

You can certainly write compilers and middleware in higher-level languages than C. While there can be a speed-of-development advantage for doing so, they will almost always run slower and consume far more memory. Many languages (Python, PHP, JavaScript, ...) are implemented in C (or C++) as a result.

If you wanted to implement something like Node in another language, you would probably best look to another language that majors on systems programming, such as C++, C#, Rust, D, ...
