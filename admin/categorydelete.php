<?php
include "class/category_class.php";
$category = new category;
if (!isset($_GET['category_id']) || $_GET['category_id'] == NULL) {
    echo "<script>window.location = 'categorylist.php'</script>";
} else {
    $category_id = $_GET['category_id'];
}
    $delete_category = $category -> delete_category($category_id);

?>
