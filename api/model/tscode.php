<?php 
class TsCode extends Model{
    protected $alias='code';
    protected $columns=array(
        'nama'=>'VARCHAR(64)',
    );
    protected $firstdata=array(
        array(
            'id'=>1,
            'nama'=>'Komplain',
        ),
        array(
            'id'=>2,
            'nama'=>'Overtime AC',
        ),
        array(
            'id'=>3,
            'nama'=>'Pinjam Assets',
        ),
        array(
            'id'=>4,
            'nama'=>'Kartu Parkir',
        ),
        array(
            'id'=>5,
            'nama'=>'Kartu Access',
        ),
        array(
            'id'=>6,
            'nama'=>'Kartu ID',
        ),
    );
}