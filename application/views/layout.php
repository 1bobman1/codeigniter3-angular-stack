<html lang="">
    <head>
        <base href="/" />
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <link rel="stylesheet" href="/public/vendor/angular-material/angular-material.min.css">
        <link href="/public/vendor/angular-material-data-table/dist/md-data-table.min.css" rel="stylesheet" type="text/css"/>
        <link rel="stylesheet" href="/public/vendor/angular-material-time-picker/dist/md-time-picker.css">
        <link rel="stylesheet" href="/public/vendor/bootstrap/dist/css/bootstrap.min.css">
        <link href="/public/css/style.css" rel="stylesheet">
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body ng-app="GeneralApp" ng-cloak>
        <div class="ng-view"></div>
        <script src="/public/vendor/jquery/dist/jquery.min.js"></script>
        <script src="/public/vendor/jquery-ui/jquery-ui.min.js"></script>
        <script src="/public/vendor/angular/angular.min.js"></script>
        <script src="/public/vendor/angular-animate/angular-animate.min.js"></script>
        <script src="/public/vendor/angular-aria/angular-aria.min.js"></script>
        <script src="/public/vendor/angular-messages/angular-messages.min.js"></script>
        <script src="/public/vendor/angular-route/angular-route.min.js"></script>
        <script src="/public/vendor/angular-material/angular-material.min.js"></script>
        <script src="/public/vendor/angular-dragdrop/src/angular-dragdrop.min.js"></script>
        <script src="/public/vendor/angular-cookies/angular-cookies.min.js"></script>
        <script src="/public/vendor/angular-material-data-table/dist/md-data-table.min.js"></script>
        <script src="/public/vendor/oclazyload/dist/ocLazyLoad.min.js"></script>
        <script src="/public/vendor/angular-elastic/elastic.js"></script>
        <script src='/public/vendor/angular-upload/angular-upload.min.js'></script>
        <script src="/public/vendor/angular-clipboard/angular-clipboard.js"></script>
        <script src="/public/vendor/angular-material-time-picker/dist/md-time-picker.js"></script>
        <script src="/public/vendor/bootstrap/dist/js/bootstrap.min.js"></script>
        <script src="/public/js/main.min.js"></script>  
        <script>
            <?php $data = $_SESSION; if (!empty($data['user'])): ?>
                var userProfile = <?php echo json_encode($data['user']); ?>;
            <?php else: ?>
                var userProfile = false;
            <?php endif; ?>
        </script>
    </body>
</html> 
