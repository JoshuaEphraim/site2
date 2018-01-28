<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800" />
    <script type="text/javascript" src="public/Template/js/bundle.js"></script>

    <title><?php echo $domain; ?></title>
    <script>
        d_id=<?php echo $generator->getDId(); ?>;
    </script>
    <script >
        var traffic=<? echo $getTraffic->getTraffic();?>;
        var tDates=<? echo $getTraffic->getTDates();?>;
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
    <div id="wrapper"><div class="inner">
            <div id="content">
                <div class="row">
                    <div class="cell">
                        <div class="block blue">
                            <div class="header">
                                <p class="caption"><?php echo ucfirst($printFirstElement); ?> Review</p>
                                <p>Website Description here small cutted variant in 2 lines more infomation here</p>
                            </div>
                            <div class="content">
                                <p class="title">Scam / Legit ?</p>
                                <p>Praesent ut consectetur dui. Nunc malesuada turpis quis venenatis pretium. Nulla feugiat vestibulum orci, sit amet fermentum tortor sagittis a. Curabitur massa neque, cursus non ipsum sed, tempus pharetra quam. Pellentesque orci arcu, sollicitudin fermentum sodales in, facilisis dictum est.  Praesent ut consectetur dui. Nunc malesuada turpis quis venenatis pretium.</p>
                                <p>Nulla feugiat vestibulum orci, sit amet fermentum tortor sagittis a. Curabitur massa neque, cursus non ipsum sed, tempus pharetra quam. Pellentesque orci arcu, sollicitudin fermentum sodales in, facilisis dictum est.</p>
                                <div id="chart-01"></div>
                                <p class="title">Data</p>
                                <p>Praesent ut consectetur dui. Nunc malesuada turpis quis venenatis pretium. Nulla feugiat vestibulum orci, sit amet fermentum tortor sagittis a. Curabitur massa neque, cursus non ipsum sed, tempus pharetra quam. Pellentesque orci arcu, sollicitudin fermentum</p>
                            </div>
                        </div>
                    </div>
                    <div class="cell">
                        <div class="block red">
                            <div class="header">
                                <p class="caption">Report</p>
                                <p>Website Description here small cutted variant in 2 lines more infomation here</p>
                            </div>
                            <div class="content">
                                <p class="title">Generated Report</p>
                                <p>Praesent ut consectetur dui. Nunc malesuada turpis quis venenatis pretium. Nulla feugiat vestibulum orci, sit amet fermentum tortor sagittis a. Curabitur massa neque, cursus non ipsum sed, tempus pharetra quam. Pellentesque orci arcu, sollicitudin fermentum sodales in, facilisis dictum est.</p>
                                <div id="chart-02"></div>
                                <ul class="legend">
                                    <li><span style="background-color: #81d0d4"></span> Lorem ipsum<br />dolor sit amet</li>
                                    <li><span style="background-color: #817f91"></span> Lorem ipsum<br />dolor sit amet</li>
                                    <li><span style="background-color: #f4857f"></span> Lorem ipsum<br />dolor sit amet</li>
                                    <li><span style="background-color: #c9cacc"></span> Lorem ipsum<br />dolor sit amet</li>
                                </ul>
                                <p class="title red">Description</p>
                                <p>Praesent ut consectetur dui. Nunc malesuada turpis quis venenatis pretium. Nulla feugiat vestibulum orci, sit amet fermentum tortor sagittis a. Curabitur massa neque, cursus non ipsum sed, tempus pharetra quam. Pellentesque orci arcu, sollicitudin fermentum sodales in, facilisis dictum est.</p>
                            </div>
                        </div>
                    </div>
                    <div class="cell">
                        <div class="block black">
                            <div class="header">
                                <p class="caption">User Reviews</p>
                                <a class="more" id="leave_review">Leave your review</a>
                            </div>
                            <div class="content reviews_block">
                                <div id="reviews"></div>

                                <div class="hidden_review"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="cell">
                        <div class="block red">
                            <div class="header">
                                <p class="caption">Statistics</p>
                                <p>Website Description here small cutted variant in 2 lines more infomation here</p>
                            </div>
                            <div class="content">
                                <p class="title">4rx.com Stats</p>
                                <p>Praesent ut consectetur dui. Nunc malesuada turpis quis venenatis pretium. Nulla feugiat vestibulum orci, sit amet fermentum tortor sagittis a. Curabitur massa neque, cursus non ipsum sed, tempus pharetra quam. Pellentesque orci arcu, sollicitudin fermentum.</p>
                                <ul class="legend">
                                    <li><span style="background-color: #81d0d4"></span> Lorem ipsum<br />dolor sit amet</li>
                                    <li><span style="background-color: #817f91"></span> Lorem ipsum<br />dolor sit amet</li>
                                    <li><span style="background-color: #f4857f"></span> Lorem ipsum<br />dolor sit amet</li>
                                    <li><span style="background-color: #c9cacc"></span> Lorem ipsum<br />dolor sit amet</li>
                                </ul>
                                <div class="clear"><!--//--></div>
                                <br />
                                <div id="chart-03"></div>
                            </div>
                        </div>
                    </div>
                    <div class="cell">
                        <div class="block black">
                            <div class="header">
                                <p class="caption">Rates</p>
                                <p>Website Description here small cutted variant in 2 lines more infomation here</p>
                            </div>
                            <div class="content">
                                <div id="chart-05"></div>
                                <ul class="legend">
                                    <li><span style="background-color: #66647a"></span> Average rating <br />on sites</li>
                                </ul>
                                <div class="clear"><!--//--></div>
                                <br />
                                <p>Praesent ut consectetur dui. Nunc malesuada turpis quis venenatis pretium. Nulla feugiat vestibulum orci, sit amet fermentum tortor sagittis a. Curabitur massa neque, cursus non</p>
                                <div id="chart-06"></div>
                                <div id="chart-07"></div>
                                <ul class="legend">
                                    <li><span style="background-color: #f77963"></span> Positive<br />rates</li>
                                    <li><span style="background-color: #a8a9ad"></span> Negative<br />rates</li>
                                </ul>
                                <div class="clear"><!--//--></div>
                                <br />
                                <p class="title red">Summary</p>
                                <p>Praesent ut consectetur dui. Nunc malesuada turpis quis venenatis pretium. Nulla feugiat vestibulum orci, sit amet fermentum tortor sagittis a. Curabitur massa neque, cursus non ipsum sed, tempus pharetra quam. Pellentesque orci arcu, sollicitudin fermentum sodales in, facilisis dictum est.</p>
                            </div>
                        </div>
                    </div>
                    <div class="cell">
                        <div class="block blue">
                            <div class="header">
                                <p class="caption">WhoIs / IP</p>
                                <p>Website Description here small cutted variant in 2 lines more infomation here</p>
                            </div>
                            <div class="content">
                                <p class="title">WhoIs</p>
                                <?php
                                if(is_array($whois)) {
                                    echo "<ul>";
                                            foreach ($whois as $key => $value) {
                                            if (!empty($value) && stripos($key, 'http') === false) {
                                            echo "<li>";
                                                echo "<span>" . $key . ":</span> " . $value;
                                                echo "</li>";
                                            }
                                            }
                                            echo "</ul>";
                                            }
                                            else
                                            {
                                            echo $whois;
                                            }

                                ?>
                                <p class="title">IP</p>
                                <ul>
                                    <li>IPs: <?php echo (!empty($geo['geoplugin_request']))?$geo['geoplugin_request']:'Unknown'; ?></li>
                                    <li>City: <?php echo (!empty($geo['geoplugin_city']))?$geo['geoplugin_city']:'Unknown'; ?></li>
                                    <li>Country: <?php echo (!empty($geo['geoplugin_countryName']))?$geo['geoplugin_countryName']:'Unknown'; ?></li>
                                    <li>State: <?php echo (!empty($geo['geoplugin_regionName']))?$geo['geoplugin_regionName']:'Unknown'; ?></li>
                                    <li>Currency Code:  <?php echo (!empty($geo['geoplugin_currencyCode']))?$geo['geoplugin_currencyCode']:'Unknown'; ?></li>
                                    <li>Currency Symbol: <?php echo (!empty($geo['geoplugin_currencySymbol']))?$geo['geoplugin_currencySymbol']:'Unknown'; ?></li>
                                </ul>
                                <p class="title">Reverse</p>
                                <ul>
                                    <?php
                                    if(is_array($reverseIp)) {
                                        foreach ($reverseIp as $value) {
                                            echo '<li>' . $value . '</li>';
                                        }
                                    }
                                    else{
                                    echo '<li>' . $reverseIp . '</li>';
                                    }
                                    ?>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="cell">
                        <div class="block blue">
                            <div class="header">
                                <p class="caption">Comments</p>
                                <p>Website Description here small cutted variant in 2 lines more infomation here</p>
                            </div>
                            <div class="content">
                                <div id="comments">

                                </div>
                                <form id="comment_1" name="" method="" action="">
                                    <div class="iconed">
                                        <input type="text" name="" value="" placeholder="Name" class="txt" />
                                        <span class="name"><!--//--></span>
                                    </div>
                                    <div class="iconed">
                                        <input type="text" name="" value="" placeholder="Email" class="txt" />
                                        <span class="mail"><!--//--></span>
                                    </div>

                                    <textarea name="" rows="14" placeholder="Message" class="txt"></textarea>
                                    <div class="ratenow">
                                        <label for="select_1">Rate Now</label>
                                        <select class="selectpicker" placeholder='Rate' id="select_1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option selected>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                        </select>
                                    </div>
                                    <input type="submit" name="" value="Send Message" class="btn" />

                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="cell">
                        <div class="block red">
                            <div class="header">
                                <p class="caption">Info</p>
                                <p>Website Description here small cutted variant in 2 lines more infomation here</p>
                            </div>
                            <div class="content">
                                <p>Praesent ut consectetur dui. Nunc malesuada turpis quis venenatis pretium. Nulla feugiat vestibulum orci, sit amet fermentum tortor sagittis a. Curabitur massa neque, cursus non ipsum sed, tempus pharetra quam. Pellentesque orci arcu, sollicitudin fermentum sodales in, facilisis dictum est.  Praesent ut consectetur dui. Nunc malesuada turpis quis venenatis pretium. Nulla feugiat vestibulum orci, sit amet fermentum tortor sagittis a. Curabitur massa neque, cursus non ipsum sed, tempus pharetra quam. Pellentesque orci arcu, sollicitudin fermentum sodales in, facilisis dictum est.</p>
                                <p>Praesent ut consectetur dui. Nunc malesuada turpis quis venenatis pretium. Nulla feugiat vestibulum orci, sit amet fermentum tortor sagittis a. Curabitur massa neque, cursus non ipsum sed, tempus pharetra quam. Pellentesque orci arcu, sollicitudin fermentum sodales in, facilisis dictum est.  Praesent ut consectetur dui. Nunc malesuada turpis quis venenatis pretium. Nulla feugiat vestibulum orci, sit amet fermentum tortor sagittis a. Curabitur massa neque, cursus non ipsum sed, tempus pharetra quam. Pellentesque orci arcu, sollicitudin fermentum sodales in, facilisis dictum est.</p>
                            </div>
                        </div>
                    </div>
                    <div class="cell">
                        <div class="block black">
                            <div class="header">
                                <p class="caption">Misc</p>
                                <p>Website Description here small cutted variant in 2 lines more infomation here</p>
                            </div>
                            <div class="content">
                                <p class="title red">SE</p>
                                <p>Praesent ut consectetur dui. Nunc malesuada turpis quis venenatis pretium. Nulla feugiat vestibulum orci, sit amet fermentum tortor sagittis a. Curabitur massa neque, cursus non ipsum sed, tempus pharetra quam. Pellentesque orci arcu, sollicitudin fermentum sodales in, facilisis dictum est.  Praesent ut consectetur dui. Nunc malesuada turpis quis venenatis pretium. Nulla feugiat vestibulum orci, sit amet fermentum tortor sagittis a. Curabitur massa neque, cursus non ipsum sed, tempus pharetra quam. Pellentesque orci arcu, sollicitudin fermentum sodales in, facilisis dictum est.</p>
                                <p class="title red">Social</p>
                                <p>Praesent ut consectetur dui. Nunc malesuada turpis quis venenatis pretium. Nulla feugiat vestibulum orci, sit amet fermentum tortor sagittis a. Curabitur massa neque, cursus non ipsum sed, tempus pharetra quam. Pellentesque orci arcu, sollicitudin fermentum sodales in, facilisis dictum est.  Praesent ut consectetur dui. Nunc malesuada turpis quis venenatis pretium. Nulla feugiat vestibulum orci, sit amet fermentum tortor sagittis a. Curabitur massa neque, cursus non ipsum sed, tempus pharetra quam. Pellentesque orci arcu, sollicitudin fermentum sodales in, facilisis dictum est.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
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
<div id="leave">
    <a class="more" id="leave_comment">Close</a>
    <form id="comment_0" name="" method="" action="">
        <div class="iconed">
            <input type="text" name="" value="" placeholder="Name" class="txt" />
            <span class="name"><!--//--></span>
        </div>
        <div class="iconed">
            <input type="text" name="" value="" placeholder="Email" class="txt" />
            <span class="mail"><!--//--></span>
        </div>

        <textarea name="" rows="14" placeholder="Review" class="txt"></textarea>
        <div class="ratenow">
            <label for="select_0">Rate Now</label>
            <select class="selectpicker" placeholder='Rate' id="select_0">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option selected>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
            </select>

        </div>
        <input type="submit" name="" value="Send Review" class="btn" />

    </form>
</div>

</body>
</html>