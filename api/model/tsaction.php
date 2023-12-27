<?php 
class TsAction extends Model{
    protected $alias='action';
    protected $columns=array(
        'identitas'=>'VARCHAR(64)',
        'obyek'=>'VARCHAR(128)',
        'catatan'=>'VARCHAR(128)',
        'image'=>'VARCHAR(128)',
    );
}