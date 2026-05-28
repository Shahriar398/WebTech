# WebTech

<!DOCTYPE html>
<html>
    <head>
        <title>HTML Form</title>
        <style> 
            h1{
                color: blue;
                background-color: lightgray;
                padding: 10px; /* Add padding to create space around the text */
                border: 2px solid black; /* Add a border around the heading */
                border-radius: 10px; /* Add rounded corners to the border */
            }
            button1
            {
                background-color: green;
                color: white;
                padding: 10px;
            }
            button2
            {
                background-color: red;
                color: white;
                padding: 10px;
            }
        </style>
        <h1 align="center">Form</h1>
    </head>
    <body>
        <form action="https://google.com" method="POST" autocomplete="on">
            

            <fieldset>
                <label> First Name: </label>
            <input type="text" name="fname" placeholder="Enter your first name" id="fname">
            <br>
            <br>
            <label> Last Name: </label>
            <input type="text" name="lname" placeholder="Enter your last name" id="lname">
            <br>
            <br>
            <label> Date of Birth: </label>
            <input type="date" name="dob">
            <br>
            <br>
            <label> Phone Number: </label>
            <input type="phone" name="phone" placeholder="Enter your phone number">
            <br>
            <br>
            <label> Email: </label>
            <input type="email" name="email" placeholder="Enter your email">
            <br>
            <br>
            <label> Password: </label>
            <input type="password" name="password" placeholder="Enter your password">
            <br>
            <br>
            <label> Choose your age range: </label>
            <select name="age-range">
                <option value=""> Select an option </option>
                <option value="0-18">0-18 years</option>
                <option value="19-30">19-30 years</option>
                <option value="31-50">31-50 years</option>
                <option value="51+">51+ years</option>
            </select>
            <br>
            <br>
            <label> Age: </label>
            <input type="number" name="age" placeholder="Enter your age">
            <br>
            <br>
            <input type="radio" value="male" name="gender">
            <label> Male </label>
            <br>
            <input type="radio" value="female" name="gender">
            <label> Female </label>

            <br>
            <br>

            <label> Message: </label>
            <textarea name="message" cols="40" rows="5" placeholder="Enter your message"></textarea>

            <br>
            <br>
            
            <label> Newsletter: </label>
            <input type="checkbox" name="newsletter" value="yes">
            <br>
            <br>
            <input type="file"  >

            <br>
            <br>

            <button1 type="submit" name="Submit" value="Submit">Submit</button1>
            <button2 type="reset" name="Reset" value="Reset">Reset</button2>
            </fieldset>
        </form>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SiFm5YhrC-A?si=L29FIDRjTtWyAr1G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </body>
</html>
