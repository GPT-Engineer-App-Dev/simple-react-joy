import React, { useState } from 'react';
import { Trash2, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

export default function Index() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addNote();
    }
  };

  const deleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="min-h-screen bg-pink-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-pink-600 mb-6 text-center">
          ✨ Pinky Notes ✨
        </h1>
        <p className="text-center text-pink-500 mb-8">Your fun and fabulous note-taking companion!</p>
        
        <div className="flex mb-4">
          <Input
            type="text"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Jot down your fabulous thoughts..."
            className="flex-grow mr-2 focus-visible:ring-pink-500 focus-visible:ring-offset-0 focus-visible:border-pink-500"
          />
          <Button onClick={addNote} className="bg-pink-500 hover:bg-pink-600 text-white">
            <Pencil size={18} className="mr-2" />
            Add Note
          </Button>
        </div>

        <div className="space-y-4">
          {notes.map((note, index) => (
            <Card key={index} className="bg-white hover:shadow-md transition-shadow duration-300">
              <CardContent className="flex justify-between items-center p-4">
                <p className="text-gray-800">{note}</p>
                <Button
                  onClick={() => deleteNote(index)}
                  variant="ghost"
                  className="text-pink-500 hover:text-pink-600 hover:bg-pink-100"
                >
                  <Trash2 size={20} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {notes.length === 0 && (
          <p className="text-center text-pink-400 mt-8">No notes yet. Start adding some pink-tastic ideas!</p>
        )}
      </div>
    </div>
  );
}