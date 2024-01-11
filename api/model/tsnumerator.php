<?php 
class TsNumerator extends Model{
    protected $alias='numerator';
    protected $columns=array(
        'ymd'=>'INT',
        'code_id'=>'INT',
        'idx'=>'INT DEFAULT 1',
    );
}