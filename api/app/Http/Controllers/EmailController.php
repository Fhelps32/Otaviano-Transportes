<?php

namespace App\Http\Controllers;

use App\Mail\content;
use App\Mail\contentMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    public function send(Request $request){
        $data = $request->validate([
            'cepOrigem' => 'require|srting',
            'cepDestino' => 'require|srting',
            'cargaPeso' => 'require|integer|min:0|',
            'cubagem' => 'require|numeric|min:0',
            'qtdVolumes' => 'require|integer|min:0',
            'valorNota' => 'require|numeric|min:0',
            'tipo' => 'require|string'
        ]);

        Mail::to($request->user('lyipe32@gmail.com'))->send(new contentMail);
    }
}
