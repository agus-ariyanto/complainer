<?php 
class TsLokasi extends Model{
    protected $alias='lokasi';
    protected $columns=array(
        'sbu_id'=>'INT DEFAULT 1',
        'office_id'=>'INT DEFAULT 1',
        'nama'=>'VARCHAR(128)',
    );
    public $join = 'sbu,office';
}