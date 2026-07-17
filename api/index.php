<?php

// Trik agar Vercel bisa menulis file cache/view sementara
putenv('VIEW_COMPILED_PATH=/tmp/views');

$_SERVER['SCRIPT_FILENAME'] = __DIR__ . '/../public/index.php';
$_SERVER['SCRIPT_NAME'] = '/index.php';

require __DIR__ . '/../public/index.php';