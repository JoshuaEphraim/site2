<?php
/**
 * Created by PhpStorm.
 * User: Alex
 * Date: 22.11.2017
 * Time: 15:24
 */
include('../config.php');
$comment_0 = $db_c->query('SELECT COUNT(*) count,SUM(rate) rate FROM dc_domain_comment WHERE `status` = 0 AND type = 0');
$comment_1 = $db_c->query('SELECT COUNT(*) count,SUM(rate) rate FROM dc_domain_comment WHERE `status` = 0 AND type = 1');

$c0 = mysqli_fetch_array($comment_0);
$c1 = mysqli_fetch_array($comment_1);

echo json_encode(array($c0,$c1));