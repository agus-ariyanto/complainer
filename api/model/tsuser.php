<?php 
/* 
alias auth untuk table join user
 */
class TsUser extends Model{
    protected $table='tsauth';
    protected $alias='user';
    protected $columns=array(
        'usr'=>'VARCHAR(128)',
        'nama'=>'VARCHAR(128)',
        'hp'=>'VARCHAR(16)',
        'nip'=>'VARCHAR(16)',
        'grup_id'=>'INT DEFAULT 4',
        'atasan_id'=>'INT DEFAULT 0',
        'bidang_id'=>'INT DEFAULT 0',
        'office_id'=>'INT DEFAULT 0',
        'sbu_id'=>'INT DEFAULT 0',
    );
    public $join='grup,atasan,bidang,office,sbu';
}