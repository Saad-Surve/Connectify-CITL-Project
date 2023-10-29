"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { deleteThread } from "@/lib/actions/thread.actions";

interface Props {
  threadId: string;
  currentUserId: string;
  authorId: string;
  parentId: string | null;
  isComment?: boolean;
}

function DeleteThread({
  threadId,
  currentUserId,
  authorId,
  parentId,
  isComment,
}: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [loading, setLoading] = useState(false)

  if (currentUserId !== authorId || pathname === "/") return null;

  return (
    <>    
    <Button onPress={onOpen} isIconOnly color="danger" aria-label="Like">
      <Image
        src='/assets/delete.svg'
        alt='delete'
        width={18}
        height={18}
        className='cursor-pointer object-contain'
        
      />
    </Button>  
    <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">Delete Thread</ModalHeader>
          <ModalBody>
            <p> 
              Do you really want to delete the post?
            </p>

          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button 
                isLoading={loading}
                color="primary" 
                onClick={async () => {
                    setLoading(true)
                    await deleteThread(JSON.parse(threadId), pathname);
                    if (!parentId || !isComment) {
                        router.push("/");
                    }
                    setLoading(false)
                }}
            >
              {!loading?'Delete': 'Deleting...'}
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
  
    </>
   
  );
}

export default DeleteThread;