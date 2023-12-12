<?php 
/*
identitas : nopol, nohp, dll  
 */
class TsSubmission extends Model{
    protected $alias='submission';
    protected $columns=array(
        'start'=>'DATETIME',
        'stop'=>'DATETIME',
        'identitas'=>'VARCHAR(64)',
        'obyek'=>'VARCHAR(128)',
        'catatan'=>'VARCHAR(128)',
        'image'=>'VARCHAR(128)',
    );
}