<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{title}</title>
</head>
<body>
    <form action="/login/register/" name="user" method="POST">
        <h1>{heading}</h1>
        <span>{temp_var}</span><br>
        <div>Error: {error}</div>
        <label for="">email: <input type="text" name="userEmail" value="{userEmail}" placeholder="email"></label><br>
        <label for="">login: <input type="text" name="userName" value="{userName}" placeholder="login"></label><br>
        <label for="">password: <input type="text" name="userPassword" value="" placeholder="password"></label><br>
        <input type="submit" value="Go">
    </form>
</body>
</html>