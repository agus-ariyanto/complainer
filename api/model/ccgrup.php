<?php
class CcGrup extends Model{
    protected $alias='grup';
    protected $columns=array(
        'nama'=>'VARCHAR(24)',
        'keterangan'=>'VARCHAR(128)',
    );
    protected $firstdata=array(
        array(
            'id'=>1,
            'nama'=>'root',
            'keterangan'=>'root',
        ),
        array(
            'id'=>2,
            'nama'=>'superior',
            'keterangan'=>'atasan yang memberi perintah',
        ),
        array(
            'id'=>3,
            'nama'=>'officer',
            'keterangan'=>'pelaksana perintah',
        ),
        array(
            'id'=>4,
            'nama'=>'user',
            'keterangan'=>'pelapor atau pengguna',
        ),
    );
}
