<?php 
class TsAction extends Model{
    protected $alias='action';
    protected $columns=array(
        'obyek'=>'VARCHAR(128)',
        'catatan'=>'TEXT',
        'image_1'=>'VARCHAR(128)',
        'image_2'=>'VARCHAR(128)',
    );
}