<?php 
class TsAset extends Model{
    protected $alias='aset';
    protected $columns=array(
        'nama'=>'VARCHAR(128)',
    );
    protected $firstdata=array(
        array(
            'id'=>1,
            'nama'=>'elektronik',
        ),
        array(
            'id'=>2,
            'nama'=>'non elektronik',
        ),
        array(
            'id'=>3,
            'nama'=>'bangunan',
        ),
        array(
            'id'=>4,
            'nama'=>'aset bergerak',
        ),
    );
}