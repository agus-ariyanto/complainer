<?php 
class TdOffice extends Model{
    protected $alias='office';
    protected $columns=array(
        'name'=>'VARCHAR(128)',
        'address'=>'VARCHAR(256)',
        'phone'=>'VARCHAR(24)',
        'city'=>'VARCHAR(128)',
    );
}