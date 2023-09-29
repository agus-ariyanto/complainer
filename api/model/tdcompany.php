<?php 
class TdCompany extends Model{
    protected $alias='company';
    protected $columns=array(
        'name'=>'VARCHAR(128)',
        'address'=>'VARCHAR(256)',
        'phone'=>'VARCHAR(24)',
        'city'=>'VARCHAR(128)',
    );
}