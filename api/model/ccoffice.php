<?php 
class CcOffice extends Model{
    protected $alias='office';
    protected $columns=array(
        'sbu_id'=>'INT',
        'nama'=>'VARCHAR(128)',
    );
    protected $firstdata=array(
        array(
            'id'=>1,
            'nama'=>'JAMSOSTEK',
            'sbu_id'=>1,
        ),
        array(
            'id'=>2,
            'nama'=>'MAMPANG',
            'sbu_id'=>1,
        ),
        array(
            'id'=>3,
            'nama'=>'GANDUL',
            'sbu_id'=>1,
        ),
        array(
            'id'=>4,
            'nama'=>'CAWANG',
            'sbu_id'=>2,
        ),
    );

    public $join='sbu';
}