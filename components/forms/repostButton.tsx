"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { deleteThread, repostThread } from "@/lib/actions/thread.actions";



interface Props {
    text: string,
    repostedBy: string;
    author: string;
  }

function RepostButton({
  text,
  repostedBy,
  author,
}: Props) {
  const path = usePathname();
  const router = useRouter();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [loading, setLoading] = useState(false)

  return (
    <>    
    
      <Image
        onClick={onOpen}
        src='/assets/repost.svg'
        alt='repost'
        width={24}
        height={24}
        className='cursor-pointer object-contain'
        
      />
    <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">Repost Post</ModalHeader>
          <ModalBody>
            <p> 
              Do you really want to repost?
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
                    await repostThread({text, repostedBy, communityId:'' , author, path});
                    setLoading(false)
                    onClose()
                }}
            >
              {!loading?'Repost': 'Reposting...'}
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
  
    </>
   
  );
}

export default RepostButton;