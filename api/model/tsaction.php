<?php 
class TsAction extends Model{
    protected $alias='action';
    protected $columns=array(
        'obyek'=>'VARCHAR(128)',
        'catatan'=>'TEXT',
        'image'=>'VARCHAR(128)',
    );
}