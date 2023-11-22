<?php 
/*
alias auth untuk table join approval 
 */
class TsAtasan extends Model{
    protected $table='tsauth';
    protected $alias='atasan';
    protected $columns=array(
        'nama'=>'VARCHAR(128)',
        'hp'=>'VARCHAR(16)',
        'nip'=>'VARCHAR(16)',
        'grup_id'=>'INT DEFAULT 4',
        'bidang_id'=>'INT DEFAULT 0',
        'office_id'=>'INT DEFAULT 0',
        'sbu_id'=>'INT DEFAULT 0',
    );
    public $join='office,sbu';
}