<?php 
class TsAction extends Model{
    protected $alias='action';
    protected $columns=array(
        'tindakan'=>'VARCHAR(64)',
        'obyek'=>'VARCHAR(128)',
        'catatan'=>'VARCHAR(512)',
        'image'=>'VARCHAR(128)',
    );
}