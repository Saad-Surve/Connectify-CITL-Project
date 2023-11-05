"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input, Checkbox, Link, Textarea} from "@nextui-org/react";
import { deleteThread } from "@/lib/actions/thread.actions";
import { updateUserInfo } from "@/lib/actions/user.actions";

interface Props {
  userId: string;
}

function EditButton({
  userId,
}: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [bio, setBio] = useState('')

  async function handleSubmit(onClose:any){
    setLoading(true)
    await updateUserInfo(userId,name,bio)
    setLoading(false)
    onClose()
    router.refresh()
  }
  return (
    <>    
    <Button onPress={onOpen} isIconOnly color="success" className="border-[#877EFF]" variant="bordered" aria-label="Like">
      <Image
        src='/assets/edit.svg'
        alt='delete'
        width={18}
        height={18}
        className='cursor-pointer object-contain'
        
      />
    </Button>  
    <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Edit Account Info</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  value={name}
                  onChange={(e)=>{setName(e.target.value)}}
                  label="Name"
                  placeholder="Enter your display name"
                  variant="bordered"
                  />
                <Textarea
                  value={bio}
                  label="Bio"
                  onChange={(e)=>{setBio(e.target.value)}}
                  placeholder="Enter your desired Bio"
                  type="password"
                  variant="bordered"
                />
                
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button 
                    isLoading={loading}
                    color="primary" 
                    onClick={()=>{handleSubmit(onClose)}}
                >
                    {!loading?'Update': 'Updating...'}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
  
    </>
   
  );
}

export default EditButton;