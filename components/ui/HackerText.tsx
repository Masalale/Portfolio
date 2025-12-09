"use client";

import { useCallback, useRef, useState } from "react";

interface HackerTextProps {
  text: string;
  className?: string;
}

// Mirror/inverse character map
const MIRROR_MAP: Record<string, string> = {
  'A': 'A', 'B': 'ᙠ', 'C': 'Ɔ', 'D': 'ᗡ', 'E': 'Ǝ', 'F': 'ꟻ', 'G': 'Ꭾ',
  'H': 'H', 'I': 'I', 'J': 'Ꮭ', 'K': 'ꓘ', 'L': '⅃', 'M': 'M', 'N': 'И',
  'O': 'O', 'P': 'ꟼ', 'Q': 'Ọ', 'R': 'Я', 'S': 'Ꙅ', 'T': 'T', 'U': 'U',
  'V': 'V', 'W': 'W', 'X': 'X', 'Y': 'Y', 'Z': 'Ƨ',
  'a': 'ɒ', 'b': 'd', 'c': 'ɔ', 'd': 'b', 'e': 'ɘ', 'f': 'ʇ', 'g': 'ǫ',
  'h': 'ʜ', 'i': 'i', 'j': 'ꞁ', 'k': 'ʞ', 'l': 'l', 'm': 'm', 'n': 'ᴎ',
  'o': 'o', 'p': 'q', 'q': 'p', 'r': 'ɿ', 's': 'ꙅ', 't': 'ƚ', 'u': 'u',
  'v': 'v', 'w': 'w', 'x': 'x', 'y': 'y', 'z': 'ƨ',
  'á': 'ɒ́', 'é': 'ɘ́', 'í': 'í', 'ó': 'ó', 'ú': 'ú'
};

function getMirrorChar(char: string): string {
  return MIRROR_MAP[char] || char;
}

function getOriginalChar(text: string, index: number): string {
  return text[index];
}

export function HackerText({ text, className = "" }: HackerTextProps) {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);

  const animateToMirror = useCallback(() => {
    let iteration = 0;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      const newText = text
        .split("")
        .map((letter, index) => {
          // Already transformed characters stay transformed
          if (index < iteration) {
            return getMirrorChar(letter);
          }
          return letter;
        })
        .join("");

      setDisplayText(newText);

      iteration += 1;

      if (iteration > text.length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
    }, 40);
  }, [text]);

  const animateToOriginal = useCallback(() => {
    let iteration = 0;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      const newText = text
        .split("")
        .map((letter, index) => {
          // Already restored characters stay original
          if (index < iteration) {
            return letter;
          }
          // Not yet restored - show mirror version
          return getMirrorChar(letter);
        })
        .join("");

      setDisplayText(newText);

      iteration += 1;

      if (iteration > text.length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        // Ensure final state is the original text
        setDisplayText(text);
      }
    }, 40);
  }, [text]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    animateToMirror();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    animateToOriginal();
  };

  return (
    <span
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        cursor: "pointer",
        display: "inline-block"
      }}
    >
      {displayText}
    </span>
  );
}
