<?php
class TdAccount extends Model{
    protected $alias='account';
    protected $table='tdauth';
    protected $columns=array(
        'usr'=>'VARCHAR(128)',
        'name'=>'VARCHAR(128)',
        'phone'=>'VARCHAR(16)',
        'grup_id'=>'INT DEFAULT 1',
        'office_id'=>'INT DEFAULT 1',
        'company_id'=>'INT DEFAULT 1',
    );
    public $join = 'grup,office,company';
}
