<?php
class TsGrup extends Model{
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
            'keterangan'=>'Atasan yang memberi persetujuan',
        ),
        array(
            'id'=>3,
            'nama'=>'officer',
            'keterangan'=>'Pelaksana perintah',
        ),
        array(
            'id'=>4,
            'nama'=>'user',
            'keterangan'=>'Pelapor, Pengaju atau Pengguna',
        ),
    );
}
