import { useState } from 'react';
// import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from '@/components/ui/alert-dialog';
import { LuFileQuestion } from 'react-icons/lu';
import { TiPencil } from 'react-icons/ti';
import { FaRegTrashAlt } from 'react-icons/fa';
import { RotateCcw } from 'lucide-react';

const difficultyColors = {
  easy: 'bg-green-500 hover:bg-green-600',
  medium: 'bg-yellow-500 hover:bg-yellow-600',
  hard: 'bg-red-500 hover:bg-red-600',
};

const difficultyLabels = {
  easy: 'Fácil',
  medium: 'Médio',
  hard: 'Difícil',
};

export function FlashcardModal({
  flashcard,
  isOpen,
  onClose,
  onEdit,
  onDelete,
  onViewQuestion,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleClose = () => {
    setIsFlipped(false);
    onClose();
  };

  const handleDelete = () => {
    onDelete(flashcard.id);
    handleClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl w-full p-0 overflow-hidden">
        <div className="relative">
          {/* Header com título e tag de dificuldade */}
          <DialogHeader className="p-6 pb-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{flashcard.title}</h2>
              <Badge
                className={`${
                  difficultyColors[flashcard.difficulty]
                } text-white`}
              >
                {difficultyLabels[flashcard.difficulty]}
              </Badge>
            </div>
          </DialogHeader>

          {/* Card com animação de flip */}
          <div className="px-6 pb-4">
            <div className="relative h-64 perspective-1000">
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* Frente do card - Pergunta */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-card border rounded-lg p-6 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-lg font-medium mb-4 text-muted-foreground">
                      Pergunta
                    </h3>
                    <p className="text-foreground text-base leading-relaxed">
                      {flashcard.question}
                    </p>
                  </div>
                </div>

                {/* Verso do card - Resposta */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-primary/5 border rounded-lg p-6 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-lg font-medium mb-4 text-muted-foreground">
                      Resposta
                    </h3>
                    <p className="text-foreground text-base leading-relaxed">
                      {flashcard.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botão de rotação */}
          <div className="px-6 pb-4 text-center">
            <Button
              onClick={handleFlip}
              variant="outline"
              className="gap-2 bg-transparent"
            >
              <RotateCcw className="h-4 w-4" />
              {isFlipped ? 'Ver Pergunta' : 'Ver Resposta'}
            </Button>
          </div>

          {/* Botões de ação */}
          <div className="flex justify-center gap-2 p-6 pt-0 border-t">
            <Button
              onClick={() => onViewQuestion(flashcard.questionId)}
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <LuFileQuestion className="h-4 w-4" />
              Questão
            </Button>

            <Button
              onClick={() => onEdit(flashcard.id)}
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <TiPencil className="h-4 w-4" />
              Editar
            </Button>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 text-destructive hover:text-destructive bg-transparent"
                >
                  <FaRegTrashAlt className="h-4 w-4" />
                  Excluir
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
                  <AlertDialogDescription>
                    Tem certeza que deseja excluir este flashcard? Esta ação não
                    pode ser desfeita.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleDelete}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    Excluir
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
