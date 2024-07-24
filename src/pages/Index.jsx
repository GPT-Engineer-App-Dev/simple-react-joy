import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';
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
        <h1 className="text-3xl font-bold text-pink-600 mb-6">Pink Note Taking App</h1>
        
        <div className="flex mb-4">
          <Input
            type="text"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter a new note"
            className="flex-grow mr-2 focus-visible:ring-pink-500 focus-visible:ring-offset-0 focus-visible:border-pink-500"
          />
          <Button onClick={addNote} className="bg-pink-500 hover:bg-pink-600 text-white">
            Add Note
          </Button>
        </div>

        <div className="space-y-4">
          {notes.map((note, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="flex justify-between items-center p-4">
                <p className="text-gray-800">{note}</p>
                <Button
                  onClick={() => deleteNote(index)}
                  variant="ghost"
                  className="text-pink-500 hover:text-pink-600"
                >
                  <Trash2 size={20} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}