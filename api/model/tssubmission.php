<?php 
/*
identitas : nopol, nohp, dll  
 */
class TsSubmission extends Model{
    protected $alias='submission';
    protected $columns=array(
        'tgl_awal'=>'DATETIME',
        'tgl_akhir'=>'DATETIME',
        'jam_awal'=>'TIME',
        'jam_akhir'=>'TIME',
        'identitas'=>'VARCHAR(64)',
        'tujuan'=>'VARCHAR(128)',
        'obyek'=>'VARCHAR(128)',
        'catatan'=>'VARCHAR(128)',
        'image'=>'VARCHAR(1024)',
    );
}