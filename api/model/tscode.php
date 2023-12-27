<?php 
class TsCode extends Model{
    protected $alias='code';
    protected $columns=array(
        'nama'=>'VARCHAR(64)',
        'icon'=>'VARCHAR(64)',
    );

    protected $firstdata=array(
        array(
            'id'=>1,
            'nama'=>'Komplen',
            'icon'=>'comment-dots',
        ),
        array(
            'id'=>2,
            'nama'=>'Overtime AC',
            'icon'=>'business-time',
        ),
        array(
            'id'=>3,
            'nama'=>'Pinjam Aset',
            'icon'=>'laptop-house',
        ),
        array(
            'id'=>4,
            'nama'=>'Kartu Parkir',
            'icon'=>'credit-card',
        ),
        array(
            'id'=>5,
            'nama'=>'Kartu Akses',
            'icon'=>'passport',
        ),
        array(
            'id'=>6,
            'nama'=>'Kartu ID',
            'icon'=>'id-badge',
        ),
    );
}