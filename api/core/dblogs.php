<?php 
class DbLogs extends Model{
    protected $alias='dblogs';
    protected $columns=array(
        'user_id'=>'BIGINT',
        'qry'=>'VARCHAR(32)',
        'tbname'=>'VARCHAR(32)',
        'tbid'=>'BIGINT',
        'tstamp'=>'TIMESTAMP DEFAULT CURRENT_TIMESTAMP',
    );
}