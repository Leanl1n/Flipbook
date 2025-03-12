<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Python Learning Flip Book</title>
    <style>
        :root {
            --primary-color: #0d2c55;
            --accent-color: #ffd54f;
            --text-light: #ffffff;
            --python-blue: #4b8bbf;
            --python-yellow: #ffd43b;
        }
        
        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f5f5;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%);
        }
        
        .book-container {
            width: 90%;
            max-width: 800px;
            height: 80vh;
            position: relative;
            perspective: 1500px;
            margin: 50px auto;
            filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.1));
        }
        
        .book {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.5s;
        }
        
        .page {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            overflow: hidden;
            transform-style: preserve-3d;
            transition: transform 0.7s cubic-bezier(0.645, 0.045, 0.355, 1.000);
            cursor: pointer;
            border-radius: 10px;
            transform-origin: left center;
            box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        }
        
        .page.flipped {
            transform: rotateY(-180deg);
        }
        
        .page-content {
            position: absolute;
            width: 100%;
            height: 100%;
            padding: 30px;
            box-sizing: border-box;
            background-color: var(--primary-color);
            color: var(--text-light);
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            overflow: auto;
            backface-visibility: hidden;
            background-image: linear-gradient(135deg, rgba(255,255,255,0.05) 25%, transparent 25%, 
                                transparent 50%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.05) 75%, 
                                transparent 75%, transparent);
            background-size: 40px 40px;
        }
        
        .controls {
            position: fixed;
            bottom: 20px;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            gap: 20px;
            z-index: 100;
            padding: 15px;
            background: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(5px);
            border-radius: 50px;
            width: fit-content;
            margin: 0 auto;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .btn {
            background-color: var(--primary-color);
            color: var(--text-light);
            border: none;
            padding: 12px 24px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s;
            box-shadow: 0 3px 5px rgba(0,0,0,0.2);
            position: relative;
            overflow: hidden;
        }
        
        .btn:before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.2),
                transparent
            );
            transition: 0.5s;
        }
        
        .btn:hover:before {
            left: 100%;
        }
        
        .btn:hover {
            background-color: var(--accent-color);
            color: var(--primary-color);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        
        .btn:active {
            transform: scale(0.98) translateY(0);
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }
        
        .btn:disabled {
            background-color: #ccc;
            cursor: not-allowed;
            box-shadow: none;
            transform: none;
        }
        
        .page-number {
            position: absolute;
            bottom: 20px;
            right: 30px;
            font-size: 14px;
            color: var(--accent-color);
        }
        
        h1, h2, h3 {
            color: var(--accent-color);
            margin-bottom: 20px;
            position: relative;
            display: inline-block;
        }
        
        h1:after, h2:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -5px;
            left: 0;
            background-color: var(--accent-color);
            transform: scaleX(0);
            transform-origin: bottom left;
            transition: transform 0.3s ease-out;
        }
        
        h1:hover:after, h2:hover:after {
            transform: scaleX(1);
        }
        
        .logo {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
        }
        
        .python-icon {
            width: 40%;
            max-width: 300px;
            margin: 20px auto;
            display: block;
            opacity: 0.8;
        }
        
        .credit-text {
            margin: 30px auto;
            font-size: 1.2rem;
            color: var(--accent-color);
            font-weight: bold;
            text-align: center;
        }
        
        .company-logo {
            width: 30%;
            max-width: 200px;
            margin: 20px auto;
            display: block;
        }
        
        .code-block {
            background-color: rgba(0, 0, 0, 0.3);
            padding: 15px;
            border-radius: 5px;
            margin: 10px 0;
            font-family: monospace;
            overflow-x: auto;
            border-left: 4px solid var(--accent-color);
            position: relative;
            transition: all 0.3s ease;
        }
        
        .code-block:hover {
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            transform: translateY(-2px);
        }
        
        .highlight {
            color: var(--accent-color);
            font-weight: bold;
            position: relative;
            transition: all 0.2s ease;
            display: inline-block;
        }
        
        .highlight:hover {
            transform: scale(1.05);
            text-shadow: 0 0 5px rgba(255, 213, 79, 0.5);
        }
        
        .keyword {
            color: #ff6b6b;
        }
        
        .string {
            color: #7bed9f;
        }
        
        .function {
            color: #70a1ff;
        }
        
        .comment {
            color: #a4b0be;
        }
        
        .note {
            background-color: rgba(255, 213, 79, 0.2);
            border-left: 4px solid var(--accent-color);
            padding: 15px;
            margin: 15px 0;
            border-radius: 0 5px 5px 0;
            position: relative;
            transition: all 0.3s ease;
        }
        
        .note:hover {
            background-color: rgba(255, 213, 79, 0.3);
            transform: translateX(5px);
        }
        
        .note:before {
            content: "📝";
            position: absolute;
            right: 15px;
            top: 15px;
            opacity: 0.5;
        }
        
        ul {
            list-style-type: none;
            padding-left: 0;
        }
        
        ul li {
            margin-bottom: 10px;
            position: relative;
            padding-left: 25px;
        }
        
        ul li:before {
            content: "•";
            color: var(--accent-color);
            font-size: 18px;
            position: absolute;
            left: 5px;
        }
        
        .cover {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        
        .cover h1 {
            font-size: 4rem;
            margin-bottom: 1rem;
        }
        
        .cover p {
            font-size: 1.5rem;
            max-width: 80%;
        }
        
        @media (max-width: 768px) {
            .cover h1 {
                font-size: 3rem;
            }
        }
    </style>
</head>
<body>
    <div class="book-container">
        <div class="book" id="book">
            <!-- Cover -->
            <div class="page" id="page-0" style="z-index: 9;">
                <div class="page-content cover">
                    <!-- Python Logo (Image 2) -->
                    <div class="python-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                            <path d="M150 0c-14.4 0-28.4 1-40.8 2.6-36.2 4.8-42.8 14.9-42.8 33.6v24.7h85.6v11.5H66.4c-18.7 0-35.1 11.2-40.2 32.6-5.9 24.5-6.1 39.8 0 65.3s18.1 32.6 35.3 32.6h22.8v-29.4c0-21.3 18.4-40 40-40h80c17.7 0 32-14.3 32-32v-65.3c0-17.7-15-30.9-32-33.6C192 1.1 180.6 0 160.4 0H150zm-44.6 19.7c8.8 0 16.1 7.3 16.1 16.3s-7.2 16.3-16.1 16.3c-8.9 0-16.1-7.3-16.1-16.3s7.2-16.3 16.1-16.3z" fill="#4584b6"/>
                            <path d="M219.8 72.4v28.5c0 22.1-18.7 40.7-39.9 40.7h-80c-17.5 0-32 15-32 32.6v61.2c0 17.4 15.1 27.7 32 32.6 20.4 5.9 39.9 7 64.2 0 16.2-4.6 32-13.9 32-32.6v-24.7H132v-11.5h96.3c18.7 0 25.7-13 32.3-32.5 6.8-20.3 6.5-39.8 0-65.9-4.7-18.7-13.6-32.6-32.3-32.6h-8.4zm-46.4 153.4c8.9 0 16.1 7.3 16.1 16.3 0 9-7.2 16.3-16.1 16.3-8.8 0-16.1-7.3-16.1-16.3 0-9 7.3-16.3 16.1-16.3z" fill="#ffd43b"/>
                        </svg>
                    </div>
                    
                    <h1>Python</h1>
                    <p>Learn to code with Python — simple, powerful, and made for everyone</p>
                    
                    <!-- Credit text replacing company logo -->
                    <div class="credit-text" style="margin: 30px auto; font-size: 1.2rem; color: var(--accent-color); font-weight: bold; text-align: center;">
                        Provided by the Learning and Development Team
                    </div>
                    
                    <div class="page-number">Cover</div>
                </div>
            </div>

            <!-- Page 1 - What is Python -->
            <div class="page" id="page-1" style="z-index: 8;">
                <div class="page-content">
                    <h1>What is Python?</h1>
                    <ul>
                        <li>Python is a <span class="highlight">high-level, beginner-friendly programming language</span>.</li>
                        <li>Used in <span class="highlight">web development</span>, <span class="highlight">data science</span>, <span class="highlight">automation</span>, <span class="highlight">AI</span>, and more.</li>
                        <li>It has <span class="highlight">simple syntax</span>, making it great for beginners.</li>
                    </ul>

                    <h2>How to Install Python on Your Computer (Step-by-Step)</h2>
                    
                    <h3>Step 1: Download Python</h3>
                    <ul>
                        <li>Go to <a href="https://python.org" style="color: var(--accent-color);">python.org</a></li>
                        <li>Click the "Download Python" button (it auto-detects your OS).</li>
                    </ul>
                    
                    <h3>Step 2: Install Python</h3>
                    <p><strong>Windows Users:</strong></p>
                    <ul>
                        <li>Open the downloaded file (python-&lt;version&gt;.exe).</li>
                        <li>Check "Add Python to PATH" at the bottom!</li>
                        <li>Click "Install Now" and wait for installation to finish.</li>
                    </ul>

                    <h3>Step 3: Verify Installation</h3>
                    <p>Open Command Prompt:</p>
                    <ul>
                        <li>Press windows button then type CMD</li>
                        <li>Type: <code>python --version</code></li>
                        <li>(It should return python version printed on your terminal)</li>
                    </ul>

                    <div class="page-number">1</div>
                </div>
            </div>

            <!-- Page 2 - Variables and Data Types -->
            <div class="page" id="page-2" style="z-index: 7;">
                <div class="page-content">
                    <h1>Variables and Data types</h1>
                    
                    <p>A <span class="highlight">variable</span> is a name that stores a value, and a <span class="highlight">data type</span> defines the kind of value a variable holds.</p>
                    
                    <h3>Common Data Types in Python:</h3>
                    <ul>
                        <li><span class="highlight">String (str)</span> → Text data → "Hello"</li>
                        <li><span class="highlight">Integer (int)</span> → Whole numbers → 10</li>
                        <li><span class="highlight">Float (float)</span> → Decimal numbers → 3.14</li>
                        <li><span class="highlight">Boolean (bool)</span> → True or False</li>
                    </ul>
                    
                    <h3>Examples:</h3>
                    <div class="code-block">
                        <span class="comment"># Input:</span><br>
                        name = <span class="string">"Alice"</span><br>
                        age = <span class="keyword">25</span><br>
                        height = <span class="keyword">5.7</span><br>
                        is_student = <span class="keyword">True</span><br><br>
                        
                        <span class="comment"># Output:</span><br>
                        <span class="function">print</span>(<span class="string">"Name: "</span>, name)<br>
                        <span class="function">print</span>(<span class="string">"Age: "</span>, age)<br>
                        <span class="function">print</span>(<span class="string">"Height: "</span>, height)<br>
                        <span class="function">print</span>(<span class="string">"Is a student: "</span>, is_student)
                    </div>
                    
                    <div class="note">
                        <strong>Result:</strong><br>
                        Name: Alice<br>
                        Age: 25<br>
                        Height: 5.7<br>
                        Is a student: True
                    </div>
                    
                    <div class="note">
                        <strong>Note:</strong> name, age, height and is_student are what you call variables.
                    </div>
                    
                    <div class="page-number">2</div>
                </div>
            </div>

            <!-- Page 3 - The Print and Input Functions -->
            <div class="page" id="page-3" style="z-index: 6;">
                <div class="page-content">
                    <h1>The Print() Function</h1>
                    
                    <p>The <span class="highlight">print()</span> function displays text or values on the screen.</p>
                    <p>You can use the <span class="highlight">input()</span> function to get user input and then display it using <span class="highlight">print()</span>.</p>
                    
                    <h3>How to use the print() function.</h3>
                    <div class="code-block">
                        <span class="comment"># Input:</span><br>
                        <span class="function">print</span>(<span class="string">"Hello, RDB"</span>)<br><br>
                        <span class="comment"># Output:</span><br>
                        Hello, RDB
                    </div>
                    
                    <h3>How to use the Input() function.</h3>
                    <div class="code-block">
                        <span class="comment"># Input:</span><br>
                        name = <span class="function">input</span>(<span class="string">"Enter your name: "</span>)<br>
                        <span class="function">print</span>(<span class="string">"Hello, "</span>, name)<br><br>
                        <span class="comment"># Output:</span><br>
                        It will ask for your name.<br>
                        Enter your name: |<br>
                        Example: Lean<br><br>
                        It will return.<br>
                        Hello, Lean
                    </div>
                    
                    <div class="note">
                        <strong>Note:</strong><br>
                        - <span class="highlight">name</span> is a variable.<br>
                        - <span class="highlight">Function</span>: is a reusable block of code that performs a specific task.<br>
                        - <span class="highlight">input()</span> and <span class="highlight">print()</span> are examples of functions.
                    </div>
                    
                    <div class="page-number">3</div>
                </div>
            </div>

            <!-- Page 4 - Conditional Statements -->
            <div class="page" id="page-4" style="z-index: 5;">
                <div class="page-content">
                    <h1>Conditional Statements</h1>
                    
                    <p><span class="highlight">Conditional</span> statements allow a program to make decisions based on conditions. The most common ones are <span class="highlight">if</span>, <span class="highlight">elif</span>, and <span class="highlight">else</span>.</p>
                    
                    <h3>Examples:</h3>
                    <div class="code-block">
                        <span class="comment"># Input:</span><br>
                        age = <span class="function">int</span>(<span class="function">input</span>(<span class="string">"Enter your age: "</span>))<br><br>
                        <span class="keyword">if</span> age >= 18:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="function">print</span>(<span class="string">"You are an adult."</span>)<br>
                        <span class="keyword">elif</span> age >= 13:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="function">print</span>(<span class="string">"You are a teenager."</span>)<br>
                        <span class="keyword">else</span>:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="function">print</span>(<span class="string">"You are a child."</span>)<br><br>
                        <span class="comment"># Output:</span><br>
                        It will ask for your age.<br>
                        Enter your age: |<br>
                        Example: 15<br><br>
                        It will return.<br>
                        You are a teenager.
                    </div>
                    
                    <div class="note">
                        <strong>Typecasting:</strong> a process that converts a variable's data type into another data type.<br>
                        <span class="function">int(input())</span> is an example of a typecasting.
                    </div>
                    
                    <div class="page-number">4</div>
                </div>
            </div>

            <!-- Page 5 - Loops -->
            <div class="page" id="page-5" style="z-index: 4;">
                <div class="page-content">
                    <h1>Loops</h1>
                    
                    <p><span class="highlight">Loops</span> help repeat code multiple times. The two main types of loops in Python are <span class="highlight">for</span> and <span class="highlight">while</span>.</p>
                    
                    <ul>
                        <li><span class="highlight">for Loop</span> (Repeats a set number of times).</li>
                        <li><span class="highlight">while Loop</span> (Repeats while a condition is True)</li>
                    </ul>
                    
                    <h3>Examples: (for loop)</h3>
                    <div class="code-block">
                        <span class="comment"># Input:</span><br>
                        <span class="keyword">for</span> i <span class="keyword">in</span> <span class="function">range</span>(5):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="function">print</span>(<span class="string">"Hello!"</span>)<br><br>
                        <span class="comment"># Output:</span><br>
                        Hello!<br>
                        Hello!<br>
                        Hello!<br>
                        Hello!<br>
                        Hello!
                    </div>
                    
                    <h3>Examples: (while loop)</h3>
                    <div class="code-block">
                        <span class="comment"># Input:</span><br>
                        count = 0<br>
                        <span class="keyword">while</span> count < 3:<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="function">print</span>(<span class="string">"Python is fun!"</span>)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;count += 1<br><br>
                        <span class="comment"># Output:</span><br>
                        Python is fun!<br>
                        Python is fun!<br>
                        Python is fun!
                    </div>
                    
                    <div class="note">
                        <strong>Counter:</strong> is often used to count occurrences dynamically or iterate over counted elements.<br>
                        <span class="highlight">i</span> is a counter.<br>
                        python counts start at 0.<br><br>
                        <strong>Increment:</strong> Increment means increasing a variable's value.<br>
                        <span class="highlight">count += 1</span> is an increment
                    </div>
                    
                    <div class="page-number">5</div>
                </div>
            </div>

            <!-- Page 6 - Lists -->
            <div class="page" id="page-6" style="z-index: 3;">
                <div class="page-content">
                    <h1>Lists</h1>
                    
                    <p>A <span class="highlight">list</span> is a collection of items stored in a specific order. Lists can hold different types of data, like numbers, strings, or even other lists.</p>
                    
                    <h3>Examples:</h3>
                    <div class="code-block">
                        <span class="comment"># Input:</span><br>
                        fruits = [<span class="string">"apple"</span>, <span class="string">"banana"</span>, <span class="string">"cherry"</span>]<br>
                        numbers = [1, 2, 3, 4, 5]<br>
                        mixed = [<span class="string">"hello"</span>, 10, 3.5, <span class="keyword">True</span>]<br><br>
                        <span class="function">print</span>(fruits[0])<br>
                        <span class="function">print</span>(fruits[-1])<br>
                        fruits[1] = <span class="string">"blueberry"</span> <span class="comment"># Change "banana" to "blueberry"</span><br>
                        <span class="function">print</span>(fruits)<br><br>
                        <span class="comment"># Output:</span><br>
                        apple<br>
                        cherry<br>
                        [<span class="string">'apple'</span>, <span class="string">'blueberry'</span>, <span class="string">'cherry'</span>]
                    </div>
                    
                    <div class="note">
                        <strong>Note:</strong> <span class="highlight">[0]</span> and <span class="highlight">[-1]</span> are examples of indices (positions where values are located).
                    </div>
                    
                    <div class="page-number">6</div>
                </div>
            </div>

            <!-- Page 7 - Functions -->
            <div class="page" id="page-7" style="z-index: 2;">
                <div class="page-content">
                    <h1>Functions</h1>
                    
                    <p>A <span class="highlight">function</span> is a reusable block of code that performs a specific task. Functions help make code organized and efficient.</p>
                    
                    <h3>Examples:</h3>
                    <div class="code-block">
                        <span class="comment"># Input: defining a function</span><br>
                        <span class="keyword">def</span> <span class="function">greet</span>(name):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="function">print</span>(<span class="string">"Hello, "</span>, name)<br><br>
                        <span class="comment"># Output: calling a function</span><br>
                        <span class="function">greet</span>(<span class="string">"Alice"</span>)<br>
                        <span class="comment"># Output: Hello, Alice</span><br><br>
                        <span class="function">greet</span>(<span class="string">"Bob"</span>)<br>
                        <span class="comment"># Output: Hello, Bob</span>
                    </div>
                    
                    <h3>Another Example of a function</h3>
                    <div class="code-block">
                        <span class="keyword">def</span> <span class="function">add</span>(a, b):<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span class="keyword">return</span> a + b<br><br>
                        result = <span class="function">add</span>(3, 5)<br>
                        <span class="function">print</span>(result)<br>
                        <span class="comment">#print(add(3,5))</span><br><br>
                        <span class="comment"># Output: 8</span>
                    </div>
                    
                    <div class="note">
                        Use <span class="highlight">return</span> to get an output from a function instead of just printing.
                    </div>
                    
                    <div class="page-number">7</div>
                </div>
            </div>

            <!-- Back Cover -->
            <div class="page" id="page-8" style="z-index: 1;">
                <div class="page-content cover">
                    <h1>Happy Coding!</h1>
                    <p>You've learned the basics of Python programming. Keep practicing and exploring to build your skills!</p>
                    
                    <!-- Python Logo (Image 2) on back cover -->
                    <div class="python-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
                            <path d="M150 0c-14.4 0-28.4 1-40.8 2.6-36.2 4.8-42.8 14.9-42.8 33.6v24.7h85.6v11.5H66.4c-18.7 0-35.1 11.2-40.2 32.6-5.9 24.5-6.1 39.8 0 65.3s18.1 32.6 35.3 32.6h22.8v-29.4c0-21.3 18.4-40 40-40h80c17.7 0 32-14.3 32-32v-65.3c0-17.7-15-30.9-32-33.6C192 1.1 180.6 0 160.4 0H150zm-44.6 19.7c8.8 0 16.1 7.3 16.1 16.3s-7.2 16.3-16.1 16.3c-8.9 0-16.1-7.3-16.1-16.3s7.2-16.3 16.1-16.3z" fill="#4584b6"/>
                            <path d="M219.8 72.4v28.5c0 22.1-18.7 40.7-39.9 40.7h-80c-17.5 0-32 15-32 32.6v61.2c0 17.4 15.1 27.7 32 32.6 20.4 5.9 39.9 7 64.2 0 16.2-4.6 32-13.9 32-32.6v-24.7H132v-11.5h96.3c18.7 0 25.7-13 32.3-32.5 6.8-20.3 6.5-39.8 0-65.9-4.7-18.7-13.6-32.6-32.3-32.6h-8.4zm-46.4 153.4c8.9 0 16.1 7.3 16.1 16.3 0 9-7.2 16.3-16.1 16.3-8.8 0-16.1-7.3-16.1-16.3 0-9 7.3-16.3 16.1-16.3z" fill="#ffd43b"/>
                        </svg>
                    </div>
                    
                    <!-- Credit text replacing company logo on back cover -->
                    <div class="credit-text" style="margin: 30px auto; font-size: 1.2rem; color: var(--accent-color); font-weight: bold; text-align: center;">
                        Provided by the Learning and Development Team
                    </div>
                    
                    <div class="page-number">Back Cover</div>
                </div>
            </div>
        </div>
    </div>

    <div class="controls">
        <button id="prev-btn" class="btn">Previous</button>
        <span id="page-indicator" style="color: #333; margin: 0 15px;">Page 1 of 9</span>
        <button id="next-btn" class="btn">Next</button>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const pages = document.querySelectorAll('.page');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            const pageIndicator = document.getElementById('page-indicator');
            let currentPage = 0;
            const totalPages = pages.length;
            
            // Initially hide all pages except the first
            for (let i = 1; i < pages.length; i++) {
                pages[i].style.display = 'none';
            }
            
            // Update controls state
            function updateControls() {
                prevBtn.disabled = currentPage === 0;
                nextBtn.disabled = currentPage === totalPages - 1;
                pageIndicator.textContent = `Page ${currentPage + 1} of ${totalPages}`;
            }
            
            // Go to specific page with animation
            function goToPage(pageNum) {
                if (pageNum < 0 || pageNum >= totalPages) return;
                
                // Add flipping animation
                if (pageNum > currentPage) {
                    // Going forward
                    pages[currentPage].classList.add('flipped');
                    setTimeout(() => {
                        // Hide current page after animation
                        pages[currentPage].style.display = 'none';
                        pages[currentPage].classList.remove('flipped');
                        
                        // Show new page
                        currentPage = pageNum;
                        pages[currentPage].style.display = 'block';
                        
                        // Apply a subtle entrance animation
                        pages[currentPage].style.opacity = '0';
                        pages[currentPage].style.transform = 'translateX(40px)';
                        setTimeout(() => {
                            pages[currentPage].style.opacity = '1';
                            pages[currentPage].style.transform = 'translateX(0)';
                        }, 50);
                        
                        updateControls();
                    }, 350); // Half the transition time
                } else if (pageNum < currentPage) {
                    // Going backward
                    pages[currentPage].style.opacity = '0';
                    pages[currentPage].style.transform = 'translateX(40px)';
                    
                    setTimeout(() => {
                        // Hide current page
                        pages[currentPage].style.display = 'none';
                        
                        // Show new page with reverse animation
                        currentPage = pageNum;
                        pages[currentPage].style.display = 'block';
                        pages[currentPage].style.opacity = '0';
                        pages[currentPage].style.transform = 'translateX(-40px)';
                        
                        setTimeout(() => {
                            pages[currentPage].style.opacity = '1';
                            pages[currentPage].style.transform = 'translateX(0)';
                        }, 50);
                        
                        updateControls();
                    }, 200);
                }
            }
            
            // Event listeners
            prevBtn.addEventListener('click', function() {
                goToPage(currentPage - 1);
            });
            
            nextBtn.addEventListener('click', function() {
                goToPage(currentPage + 1);
            });
            
            // Keyboard navigation
            document.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    goToPage(currentPage + 1);
                } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    goToPage(currentPage - 1);
                }
            });
            
            // Add hover effect to pages for better UX
            pages.forEach(page => {
                page.addEventListener('mouseenter', () => {
                    page.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
                    page.style.transform = 'translateY(-5px)';
                });
                
                page.addEventListener('mouseleave', () => {
                    page.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
                    page.style.transform = 'translateY(0)';
                });
            });
            
            // Initialize controls
            updateControls();
        });
    </script>
</body>
</html>
