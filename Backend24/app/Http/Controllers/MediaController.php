<?php

namespace App\Http\Controllers;

use App\Models\media;
use Illuminate\Http\Request;

class MediaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return News::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $news = News::create($request->all());
        return response()->json($news, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(media $media)
    {
        return News::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(media $media)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, media $media)
    {
        $news = News::findOrFail($id);
        $news->update($request->all());
        return response()->json($news, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(media $media)
    {
        News::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
