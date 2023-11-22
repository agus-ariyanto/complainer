<?php 
/*
alias auth untuk table join approval 
 */
class TsApproval extends Model{
    protected $table='tsauth';
    protected $alias='approval';
    protected $columns=array(
        'nama'=>'VARCHAR(128)',
        'hp'=>'VARCHAR(16)',
        'nip'=>'VARCHAR(16)',
        'office_id'=>'INT DEFAULT 0',
        'sbu_id'=>'INT DEFAULT 0',
    );
    public $join='office,sbu';
}