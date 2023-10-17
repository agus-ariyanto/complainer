<?php
class CcAuth extends Model{
    protected $alias='auth';
    protected $columns=array(
        'usr'=>'VARCHAR(128)',
        'pwd'=>'VARCHAR(128)',
        'nama'=>'VARCHAR(128)',
        'token'=>'VARCHAR(128)',
        'grup_id'=>'INT DEFAULT 4',
        'office_id'=>'INT DEFAULT 0',
        'bidang_id'=>'INT DEFAULT 0',
        'sbu_id'=>'INT DEFAULT 0',
    );
    public $join = 'grup,office,bidang,sbu';
}
