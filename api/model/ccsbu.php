<?php 
class CcSbu extends Model{
    protected $alias='sbu';
    protected $columns=array(
        'nama'=>'VARCHAR(64)',
    );
    protected $firstdata=array(
        array(
            'id'=>1,
            'nama'=>'SBU PUSAT',
        ),
        array(
            'id'=>2,
            'nama'=>'SBU JAKBAN',
        ),
    );
}