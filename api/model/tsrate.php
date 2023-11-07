<?php 
class TsRate extends Model{
    protected $alias='rate';
    protected $columns=array(
        'star'=>'INT',
        'ulasan'=>'VARCHAR(64)',
    );
}