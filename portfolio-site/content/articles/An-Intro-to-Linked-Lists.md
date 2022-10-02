---
title: "An Intro to Linked Lists"
date: "March 1, 2021"
author: "Devin MacGillivray"
excerpt: " A quick intro to working with Linked Lists Data Structures, for learners by a learner."
bannerImage: https://miro.medium.com/max/1134/1*JydPaHc6VTy6jwoBwP7_zg.png
---

As I progress through my Full Stack education, data structures have always loomed as a large, overwhelming topic to tackle. So here I am, learning in public, putting my findings down on paper. This is a quick intro to working with Linked Lists, for learners by a learner.

We will touch on the basics of what a linked list is, and use Javascript to show a few fundamental methods to navigate and manipulate this data structure type.

# So, what is a Linked List?

There are a couple types, but this article will only discuss singly linked lists.  
Simply put, A Linked List is a way to store a collection of items.

It is a linear, dynamic, data structure made up of nodes. In a singly linked list, each node references the next node in line, forming a chain, or **_list_**.

**_Pretty wordy… Still kind of feels like we’re using a word in its own definition huh?_** Let’s break it down a bit.

<img src="https://miro.medium.com/max/1400/1*XPu_eMJVmbO3GAC1acszYA.png"/>

## Linear

This becomes more clear when compared to a tree (A non-linear Data structure), where a parent node can have multiple children. Each Element in a singularly linked list only has reference to the single next element.

<img src="https://miro.medium.com/max/840/0*0UkxxaeQfZBOvf8u.png"/>

_Tree Data structure for non-linear reference_

## Dynamic

You might be thinking, why do I need linked lists, I already have arrays. However arrays are stored in memory as a fixed chunk. Imagine a box, which is then divided into sections of equal size, each section is given an index value.

![](https://miro.medium.com/max/564/1*3hE_7ceaE2yEyKmdZNkslw.png)
_Array example_

A linked list can be visualized as many separate boxes, each box is linked to the next via a _pointer_. A linked list can dynamically grow and shrink based on your data & needs, making it much more flexible. As you add boxes, memory is allocated to store the new nodes value and pointer.

![](https://miro.medium.com/max/324/1*ZUrUDNoGLGFnowH6rTWxOg.png)
_A linked list node_

**Each Linked List** has a **Head & Tail,** pretty self explanatory.

- **Head:** First Node in a list.
- **Tail**: Last node in a list. _The tail’s pointer points to_ **_NULL,_** _indicating it is the last element._

# **Building a linked list with Javascript**

Like most data structures in JS, we will be utilizing classes. In this case a class to build each node, and a class for the List its self.

# The Node Class

<img src="https://miro.medium.com/max/1400/1*oARvGrbaKRN1pULowyM_7A.png"/>

_Node class_

The Node class has two properties: Data & Next.

- **Data:** the data being stored, generally any type.
- **Next:** a reference to the next node in line. It defaults to null to indicate it is the tail if its next does not reference another node.

# The List Class

<img src="https://miro.medium.com/max/1280/1*FSwgr2JBscB6JBiXrfoBlg.png"/>

_List class_

The list its self generally has two properties

- **Head:** Referencing the first node in line
- **Size:** Referencing the number of nodes currently in the list

This is also where we will house the methods used to manipulate our list.

# Methods

There are plenty of ways one might wish to manipulate linked lists. We’ll go over a few basic ones here.

# **Adding a node to the start of your list**

<img src="https://miro.medium.com/max/1400/1*jQHkQ1XyiP9-vfM6r45r7w.png" />

_insertFirst Method_

This snippet assumes your list is _not_ empty. It takes assigns your new node as LinkedList’s current node. The added Nodes **_NEXT_** then references the head node prior to the insertion, effectively bumping it down the line. Then increment the size counter!

If you’re adding the first node to an empty list, the Node’s **_NEXT_** will be null. As it’s the only element, it is simultaneously the head and tail of your linked list.

# Adding a node to the end of your list

This one gets a little more complex, and we have to account for our first edge case, _if the list is currently empty._

<img src="https://miro.medium.com/max/1400/1*gIMRqlO2WCrvUieddPMaUA.png" />

_insertLast method_

To add a node to the end of our linked list we need to traverse to the end of the list and change the tail node’s **_NEXT_** reference to the new node. Loop through your Nodes until current.next === null, then set that **_NEXT_** property to be your new node.

When our linked list is initialized it is empty, and its head property is set to null. Our if statement evaluates that edge case.

# Adding a node to a specified index

Now for a something a little more involved.

<img src="https://miro.medium.com/max/1400/1*_YVbrvAimoJ4FGMx0Yqxaw.png" />

_insertAtIndex method_

As you can see, a lot more to account for on this one. Let’s start with our two edge case conditionals at the top.

**The first** is checking to see if the given index falls within the actual length of our list. If its greater than the size of our list, we don’t want to do anything (You could add a log if you were so inclined).

**The second** checks if the index is 0, ie. the first element of the List. If so, let’s call our already made insertFirst() method on our data. This will add a new first node.

Now on to the meat of our function.

- We need to loop through our list, but we want to stop just before the index, for this we need the iterator variable **_count._** Each loop it’s going to increment, and compare to the index passed in.
- We start at the head of our list, so current is defined with our head node. We also initialize a previous variable, which will hold the node just before our insertion.
- By the end of our loop, **current** will reference the node at our desired index, and **previous** will reference the node just before. So we want to set our new nodes **_NEXT_** to reference the node in the **current** variable, and our **previous** nodes **_NEXT_** to reference the new node.

# Deleting a node From a specified index

Pretty similar to insertAtIndex, but this time we want to essentially pluck out the node at the specified index.

<img src="https://miro.medium.com/max/1400/1*tgvsx4zAngAogPOwNt892Q.png" />

_removeAtIndex_

To do this, we set the **previous** nodes **_NEXT_** reference to the targets nodes **_NEXT_** reference. Effectively removing the node at the target index from the list.

Similar Edge cases once again, one checking to see if the index is valid within our list, the other to check if we’re deleting the head node.

We once again loop until our count is just short of the index input. This leaves the **current** variable referencing the node at our target index. All that’s left to do is pluck all reference to the target node out of our linked list.

Set the **previous** nodes **_NEXT_** to reference the **current** nodes **_NEXT,_** effectively removing all trace of the node in the target index.

# **Printing out your linked list’s data**

The last method we’re going to try today is printing out the data from each individual node in a linked list. This is a little less complex than the last two.

<img src="https://miro.medium.com/max/1400/1*TGjMTAhbWkYRIgEHav64sw.png"/>

This method is going to loop through our Linked list from the head to the tail, and console.log each node’s data property.

- The **current** variable allows us to traverse down the list. At the end of each loop we change it to the next node in line, so we can access its data.
- The while loop continues until **current** is no longer Truthy.

Remember that the tails **_NEXT_** property points to null, so once **current** is set to null, the loop breaks.

**Lets see the fruit of all our labor logged onto a nice code snipped below**

```js
const list = **new** LinkedList;list.insertFirst(10);
list.insertFirst(20);
list.insertAtIndex(1000, 1);
list.insertAtIndex(40, 2);
list.removeAtIndex(3);
list.insertLast('hey');list.printListData();// 20
// 1000
// 40
// hey
```

Each time we call insertFirst sets the new node to the head, meaning the last previous node gets bumped. In this case the node with data: 10 was bumped down the the index 3, and then removed by our removeAtIndex(3).

# There is certainly more to learn

Thats where we’re going to stop. There are loads of other ways to use and manipulate linked lists. You could delete a node based on its data value, or print out a nodes data at a given index, it all depends on the problem you want to solve. Hopefully this gives you a place to start!

Im by no means an expert in linked lists or data structures, and these approaches are not the only way to solve any given problem. So try them out yourself, make the code yours! If you have a beautiful way to make any of these solutions more elegant i’d love to hear it.

>
