import { NextResponse } from 'next/server';
import { spanishNames } from '@/data/spanish-names';

export async function GET() {
  try {
    const { firstNames, lastNames } = spanishNames;
    
    // Get random first name and two last names (common in Spanish naming)
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName1 = lastNames[Math.floor(Math.random() * lastNames.length)];
    const lastName2 = lastNames[Math.floor(Math.random() * lastNames.length)];
    
    return NextResponse.json({
      name: {
        firstName,
        lastName1,
        lastName2,
        fullName: `${firstName} ${lastName1} ${lastName2}`
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate name' },
      { status: 500 }
    );
  }
}