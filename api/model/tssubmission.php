<?php 
class TsSubmission extends Model{
    protected $alias='submission';
    protected $columns=array(
        'obyek'=>'VARCHAR(128)',
        'catatan'=>'VARCHAR(128)',
        'image_1'=>'VARCHAR(128)',
        'image_2'=>'VARCHAR(128)',
    );
}