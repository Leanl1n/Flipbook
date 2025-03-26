def simple_calculator():
    while True:
        print("A Simple CalCulator")
        print("1. ADD")
        print("2. Subtract")
        print("3. MULTIPLY")
        print("4. DIVIDE")
        print("5. EXIT")
        
        
        choice = input("Please enter your choice 1, 2, 3, 4, or 5: ")
        
        if choice == '5':
            print("Goodbye! Thank you for using my calculator!")
            break
        if choice in ('1','2','3','4'):
            try:
                num1 = float(input("Please Enter your first number: "))
                num2 = float(input("Please Enter your second number: "))
                
                if choice == '1':
                    result = num1 + num2
                    print(f"Result: {result}")
                elif choice == '2':
                    result = num1 - num2
                    print(f"Result: {result}")
                elif choice == '3':
                    result = num1 * num2
                    print(f"Result: {result}")
                elif choice == '4':
                    if num2 == 0:
                        print("ERROR! Divisor cannot be zero!")
                    else:
                        result = num1 / num2
                        print(f"Result: {result}")
            except ValueError:
                print("Please Enter a numerical Values!")
        
simple_calculator()
        