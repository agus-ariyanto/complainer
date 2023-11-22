<?php
class TsAuth extends Model{
    protected $alias='auth';
    protected $columns=array(
        'usr'=>'VARCHAR(128)',
        'pwd'=>'VARCHAR(128)',
        'nama'=>'VARCHAR(128)',
        'hp'=>'VARCHAR(16)',
        'nip'=>'VARCHAR(16)',
        'token'=>'VARCHAR(128)',
        'grup_id'=>'INT DEFAULT 4',
        'atasan_id'=>'INT DEFAULT 0',
        'bidang_id'=>'INT DEFAULT 0',
        'office_id'=>'INT DEFAULT 0',
        'sbu_id'=>'INT DEFAULT 0',
    );
}
