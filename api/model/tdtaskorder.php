<?php 
/* stamp : done - time */
class TdTaskorder extends Model{
    protected $alias='taskorder';
    protected $columns=array(
        'company_id'=>'INT',
        'office_id'=>'INT',
        'prior_id'=>'INT',
        'account_id'=>'INT',
        'start'=>'DATETIME',
        'stop'=>'DATETIME',
        'note'=>'VARCHAR(256)',
    );
    
}