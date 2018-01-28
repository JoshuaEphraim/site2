<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" />
    <script type="text/javascript" src="<?php echo '/public/js/'.$connect.'/bundle.js'; ?>"></script>
    <script>
        <?php if($connect==directory){
        echo 'var thisPage='.$page.'; ';
        echo    'var thisCountry="'.$country.'"; ';
        echo    'var thisRate="'.$rate.'"; ';
            }?>
    </script>
</head>
<body>
<div id="mask"></div>
<div id="container">
    <div id="header"><div class="inner">
            <div class="lSide">
                <a href="/index.php" class="logo">Med<span>Reviews</span>248</a>
            </div>
            <div class="rSide">
                <ul class="grey">
                    <li class="reviews"></li>
                    <li class="comments"></li>
                    <li class="votes"></li>
                </ul>
                <a href="#" class="trigger"><!--//--></a>
            </div>
            <div class="clear"><!--//--></div>
            <ul id="menuMain">
                <li><a href="/index.php/directory">Directory</a></li>
                <li><a href="/index.php/featured">Featured</a></li>
                <li><a href="/index.php/blog">Blog</a></li>
                <li><a href="/index.php/about">About</a></li>
            </ul>
        </div></div>

    <?php include_once('public/'.$connect.'.html'); ?>
    <div class="footer">
    <div id="subfooter"><div class="inner">
            <ul class="grey">
                <li class="reviews"></li>
                <li class="comments"></li>
                <li class="votes"></li>
            </ul>
        </div></div>
    <div id="footer"><div class="inner">
            <p>All Rights Reserved 2016</p>
        </div></div></div>
</div>
</body>
</html>
